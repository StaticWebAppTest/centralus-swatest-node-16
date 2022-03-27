module.exports = async function (context, req) {
  const date = "2022-03-27T14:08:46.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

