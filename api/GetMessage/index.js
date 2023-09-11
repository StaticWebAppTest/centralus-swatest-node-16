module.exports = async function (context, req) {
  const date = "2023-09-11T19:07:00.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

