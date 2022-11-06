module.exports = async function (context, req) {
  const date = "2022-11-06T14:09:45.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

