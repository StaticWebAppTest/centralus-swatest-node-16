module.exports = async function (context, req) {
  const date = "2024-03-15T13:10:15.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

