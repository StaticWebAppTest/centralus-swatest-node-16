module.exports = async function (context, req) {
  const date = "2024-12-19T17:09:45.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

