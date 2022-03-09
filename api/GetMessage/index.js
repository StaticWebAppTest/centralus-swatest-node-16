module.exports = async function (context, req) {
  const date = "2022-03-09T11:08:53.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

