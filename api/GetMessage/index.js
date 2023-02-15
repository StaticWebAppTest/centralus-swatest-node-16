module.exports = async function (context, req) {
  const date = "2023-02-15T09:10:30.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

