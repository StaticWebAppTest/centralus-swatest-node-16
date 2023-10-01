module.exports = async function (context, req) {
  const date = "2023-10-01T08:10:28.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

