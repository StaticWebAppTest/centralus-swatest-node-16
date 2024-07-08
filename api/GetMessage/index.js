module.exports = async function (context, req) {
  const date = "2024-07-08T15:11:09.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

