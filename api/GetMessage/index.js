module.exports = async function (context, req) {
  const date = "2023-03-19T02:19:30.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

