module.exports = async function (context, req) {
  const date = "2024-02-04T13:11:18.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

