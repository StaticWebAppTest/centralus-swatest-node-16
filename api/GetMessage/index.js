module.exports = async function (context, req) {
  const date = "2023-09-27T06:12:18.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

