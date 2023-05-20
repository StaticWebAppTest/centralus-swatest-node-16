module.exports = async function (context, req) {
  const date = "2023-05-20T07:07:33.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

