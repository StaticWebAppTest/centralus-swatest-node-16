module.exports = async function (context, req) {
  const date = "2023-10-27T15:09:01.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

