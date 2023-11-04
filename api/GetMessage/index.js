module.exports = async function (context, req) {
  const date = "2023-11-04T01:42:39.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

