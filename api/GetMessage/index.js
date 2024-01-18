module.exports = async function (context, req) {
  const date = "2024-01-18T07:09:50.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

