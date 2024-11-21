module.exports = async function (context, req) {
  const date = "2024-11-21T04:15:30.838Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

