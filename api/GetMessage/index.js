module.exports = async function (context, req) {
  const date = "2022-09-09T06:28:56.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

