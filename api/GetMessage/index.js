module.exports = async function (context, req) {
  const date = "2023-09-13T05:08:15.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

