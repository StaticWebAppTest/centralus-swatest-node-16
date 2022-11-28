module.exports = async function (context, req) {
  const date = "2022-11-28T11:09:04.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

