module.exports = async function (context, req) {
  const date = "2024-10-15T21:11:20.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

