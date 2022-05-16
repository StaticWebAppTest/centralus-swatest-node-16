module.exports = async function (context, req) {
  const date = "2022-05-16T21:10:19.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

