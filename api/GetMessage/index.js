module.exports = async function (context, req) {
  const date = "2024-06-18T11:09:15.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

