module.exports = async function (context, req) {
  const date = "2023-08-11T00:38:16.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

