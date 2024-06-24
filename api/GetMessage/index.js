module.exports = async function (context, req) {
  const date = "2024-06-24T09:12:40.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

