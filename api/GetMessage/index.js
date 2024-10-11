module.exports = async function (context, req) {
  const date = "2024-10-11T14:11:11.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

