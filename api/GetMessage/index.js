module.exports = async function (context, req) {
  const date = "2023-07-17T09:10:35.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

