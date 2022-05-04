module.exports = async function (context, req) {
  const date = "2022-05-04T03:00:33.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

