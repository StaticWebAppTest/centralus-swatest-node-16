module.exports = async function (context, req) {
  const date = "2022-09-07T20:13:56.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

