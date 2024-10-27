module.exports = async function (context, req) {
  const date = "2024-10-27T10:11:30.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

