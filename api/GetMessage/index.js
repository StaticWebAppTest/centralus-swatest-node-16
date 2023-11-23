module.exports = async function (context, req) {
  const date = "2023-11-23T06:12:15.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

