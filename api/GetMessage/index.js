module.exports = async function (context, req) {
  const date = "2024-05-21T14:09:07.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

