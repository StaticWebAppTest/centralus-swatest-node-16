module.exports = async function (context, req) {
  const date = "2023-11-05T16:10:15.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

