module.exports = async function (context, req) {
  const date = "2023-04-28T14:08:02.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

