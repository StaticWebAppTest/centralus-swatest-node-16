module.exports = async function (context, req) {
  const date = "2023-04-27T11:07:30.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

