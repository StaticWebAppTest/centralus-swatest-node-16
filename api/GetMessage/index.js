module.exports = async function (context, req) {
  const date = "2022-03-28T11:09:05.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

