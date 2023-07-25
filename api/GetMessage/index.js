module.exports = async function (context, req) {
  const date = "2023-07-25T14:08:15.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

