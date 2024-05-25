module.exports = async function (context, req) {
  const date = "2024-05-25T08:12:20.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

