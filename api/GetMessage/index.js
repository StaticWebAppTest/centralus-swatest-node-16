module.exports = async function (context, req) {
  const date = "2023-10-09T14:09:04.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

