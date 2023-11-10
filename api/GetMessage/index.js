module.exports = async function (context, req) {
  const date = "2023-11-10T07:08:05.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

