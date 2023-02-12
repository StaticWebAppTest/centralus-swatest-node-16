module.exports = async function (context, req) {
  const date = "2023-02-12T06:12:00.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

