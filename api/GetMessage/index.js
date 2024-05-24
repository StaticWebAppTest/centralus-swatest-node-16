module.exports = async function (context, req) {
  const date = "2024-05-24T06:14:09.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

