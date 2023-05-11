module.exports = async function (context, req) {
  const date = "2023-05-11T15:09:01.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

