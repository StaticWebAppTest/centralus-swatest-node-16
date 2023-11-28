module.exports = async function (context, req) {
  const date = "2023-11-28T16:12:30.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

