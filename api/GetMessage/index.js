module.exports = async function (context, req) {
  const date = "2023-06-11T14:07:09.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

