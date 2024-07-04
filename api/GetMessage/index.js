module.exports = async function (context, req) {
  const date = "2024-07-04T04:12:30.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

