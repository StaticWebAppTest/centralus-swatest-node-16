module.exports = async function (context, req) {
  const date = "2022-12-23T02:07:56.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

