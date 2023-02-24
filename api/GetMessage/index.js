module.exports = async function (context, req) {
  const date = "2023-02-24T06:13:18.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

