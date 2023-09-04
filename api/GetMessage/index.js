module.exports = async function (context, req) {
  const date = "2023-09-04T10:09:36.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

