module.exports = async function (context, req) {
  const date = "2022-05-06T13:28:47.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

