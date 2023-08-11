module.exports = async function (context, req) {
  const date = "2023-08-11T07:07:47.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

