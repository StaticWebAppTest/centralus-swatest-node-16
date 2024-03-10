module.exports = async function (context, req) {
  const date = "2024-03-10T14:08:18.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

