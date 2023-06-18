module.exports = async function (context, req) {
  const date = "2023-06-18T16:10:43.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

