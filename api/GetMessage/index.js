module.exports = async function (context, req) {
  const date = "2022-12-16T19:07:07.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

